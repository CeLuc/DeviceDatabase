<template>
  <NForm
    ref="formRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    :size="size"
  >
    <NMessageProvider>
      #hallo
    </NMessageProvider>
    <NFormItem label="Username" path="user.name">
      <NInput v-model:value="formValue.user.username" placeholder="Input Username" />
    </NFormItem>
    <NFormItem label="Password" path="user.password">
      <NInput v-model:value="formValue.user.password" placeholder="Input Password" />
    </NFormItem>
    <NFormItem>
      <NButton @click="handleValidateClick">
        Login
      </NButton>
    </NFormItem>
  </NForm>
</template>

<script>
export default defineComponent({
  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const message = useMessage();
    const modelRef = ref({
      username: null,
      password: null,
    });
    function validatePasswordStartWith(rule, value) {
      return !!modelRef.value.password && modelRef.value.password.startsWith(value) && modelRef.value.password.length >= value.length;
    }
    const rules = {
      username: [
        {
          required: true,
          message: "Username is required"
        }
      ],
      password: [
        {
          required: true,
          message: "Password is required"
        }
      ],
    };
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handleValidateButtonClick(e) {
        e.preventDefault();
        formRef.value?.validate(
          (errors) => {
            if (!errors) {
              message.success("Valid");
            } else {
              console.log(errors);
              message.error("Invalid");
            }
          }
        );
      }
    };
  }
});
</script>
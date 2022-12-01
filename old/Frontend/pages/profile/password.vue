<template>
  <div
    class="container relative flex flex-row w-full min-h-screen mx-auto bg-white rounded-xl"
  >
    <aside
      class="transition-transform duration-150 ease-in -translate-x-full border-gray-200 border-r-[1px] w-72 md:translate-x-0"
    >
      <div>
        <ul class="flex flex-col w-full p-0 list-none">
          <li
            class="relative my-px text-gray-300 bg-green-500 bg-opacity-0 first:mt-5 group after:absolute after:w-0 after:left-0 after:h-full after:bg-secondary after:top-0 hover:after:w-full after:transition-all after:duration-300"
          >
            <NuxtLink
              to="/profile"
              activeClass="text-gray-700 bg-gray-100"
              class="relative z-10 flex flex-row items-center h-10 px-3 transition-all duration-200 decoration-transparent hover:ease-in"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <div class="w-6 h-6 fill-current">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0Z" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10 -4.48-10-10-10ZM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20c-1.86 0-3.57-.64-4.93-1.72Zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83ZM12 6c-1.94 0-3.5 1.56-3.5 3.5s1.56 3.5 3.5 3.5 3.5-1.56 3.5-3.5C15.5 7.56 13.94 6 12 6Zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5 -.67 1.5-1.5 1.5Z"
                    />
                  </svg>
                </div>
              </span>
              <span class="ml-3">Profile</span>
            </NuxtLink>
          </li>
          <li
            class="relative my-px text-gray-300 bg-green-500 bg-opacity-0 first:mt-5 group after:absolute after:w-0 after:left-0 after:h-full after:bg-secondary after:top-0 hover:after:w-full after:transition-all after:duration-300"
          >
            <NuxtLink
              to="/profile/account"
              activeClass="text-gray-700 bg-gray-100"
              class="relative z-10 flex flex-row items-center h-10 px-3 transition-all duration-200 decoration-transparent hover:ease-in"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <div class="w-6 h-6 fill-current">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6 stroke-2"
                  >
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </span>
              <span class="ml-3">Account</span>
            </NuxtLink>
          </li>
          <li
            class="relative my-px text-gray-300 bg-green-500 bg-opacity-10 first:mt-5 group after:absolute after:w-1 after:left-0 after:h-full after:bg-secondary after:top-0 hover:after:w-full after:transition-all after:duration-300"
          >
            <NuxtLink
              to="/profile/password"
              activeClass="text-gray-700 bg-gray-100"
              class="relative z-10 flex flex-row items-center h-10 px-3 transition-all duration-200 decoration-transparent hover:ease-in"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <div class="w-6 h-6 fill-current">
                  <svg
                    viewBox="0 0 485.017 485.017"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"
                    />
                    <path
                      d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"
                    />
                  </svg>
                </div>
              </span>
              <span class="ml-3">Password</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
    <div
      class="flex flex-col flex-grow transition-all duration-150 ease-in -ml-72 main md:ml-0"
    >
      <div class="flex flex-col flex-grow p-4">
        <div class="relative pb-20 prose dark:prose-invert max-w-none">
          <div class="ml-6">Password</div>
        </div>
      </div>
    </div>
  </div>
</template>

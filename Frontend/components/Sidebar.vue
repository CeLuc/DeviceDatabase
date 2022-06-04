<template>
  <aside
    class="transition-transform duration-150 ease-in transform -translate-x-full bg-gray-800 w-72 md:shadow md:translate-x-0"
  >
    <div class="flex items-center justify-center py-4 sidebar-header">
      <div class="inline-flex">
        <a href="#" class="inline-flex flex-row items-center">
          <svg
            class="w-10 h-10 text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
            />
          </svg>
          <span
            class="ml-1 text-2xl font-bold leading-10 text-gray-100 uppercase"
            >sanktelisabeth</span
          >
        </a>
      </div>
    </div>
    <div class="px-4 py-6 sidebar-content">
      <ul class="flex flex-col w-full">
        <SidebarSingleLi name="Dashboard" link="/">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="stroke-2"
          >
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </SidebarSingleLi>
        <li class="my-px">
          <span
            class="flex px-4 my-4 text-sm font-medium text-gray-300 uppercase"
            >Projects</span
          >
        </li>
        <SidebarDropdownMenuLi name="Tables">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 2v3H5V5h15Zm-5 14h-5v-9h5v9ZM5 10h3v9H5v-9Zm12 9v-9h3v9h-3Z"
            />
          </svg>
          <template #submenus>
            <SidebarDropdownItemLi name="PCs" link="/db">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H14v-3H4V7Zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1Zm-1 9h-4v-7h4v7Z"
                ></path>
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="Netzwerke" link="/db/networks">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g><rect fill="none" height="24" width="24" /></g>
                <g>
                  <path
                    d="M13,22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3V22z M10,7V4h4v3H10z M9,17v3H5v-3H9z M19,17v3h-4v-3H19z"
                  />
                </g>
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="Häuser" link="/db/houses">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0Z" />
                <g>
                  <path
                    d="M17 15h2v2h-2Zm0-4h2v2h-2Zm0-4h2v2h-2Zm-3.26 0l1.26.84V7Z"
                  />
                  <path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3Z" />
                  <path
                    d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7ZM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6Z"
                  />
                </g>
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="Räume" link="/db/rooms">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0Z" />
                <path
                  d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2Zm-6 0H7V5h6v14Zm-3-8h2v2h-2Z"
                />
              </svg>
            </SidebarDropdownItemLi>
          </template>
        </SidebarDropdownMenuLi>
        <SidebarSingleLi name="Manager" link="/manager">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="stroke-2"
          >
            <path
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </SidebarSingleLi>
        <SidebarSingleLi name="Tasks" link="/tasks">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </SidebarSingleLi>
        <li class="my-px">
          <span
            class="flex px-4 my-4 text-sm font-medium text-gray-300 uppercase"
            >Account</span
          >
        </li>
        <SidebarSingleLi name="Profile" link="/profile">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 stroke-2"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </SidebarSingleLi>
        <SidebarSingleLi name="Settings" link="/settings">
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
        </SidebarSingleLi>
        <SidebarSingleLi name="Logout" color="text-red-400" link="/logout">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 stroke-2"
          >
            <path
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </SidebarSingleLi>
      </ul>
    </div>
  </aside>
</template>

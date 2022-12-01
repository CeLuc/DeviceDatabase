<template>
  <aside
    class="transition-transform duration-150 ease-in transform -translate-x-full bg-bg-secondary w-72 md:shadow md:translate-x-0"
  >
    <div class="flex items-center justify-center py-4 sidebar-header">
      <div class="inline-flex">
        <a href="#" class="inline-flex flex-row items-center">
          <svg
            class="w-10 h-10 text-error"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M315 703 c-16 -2 -60 -8 -97 -14 l-68 -11 0 -143 c0 -139 -1 -143 -22 -148 -13 -4 -26 -1 -30 6 -18 25 6 -53 48 -157 24 -60 50 -116 58 -124 10 -10 57 -18 157 -25 168 -12 331 0 358 28 15 15 13 19 -27 54 -40 35 -43 40 -31 60 17 26 31 27 47 1 7 -11 17 -20 23 -20 20 0 -14 311 -47 428 -11 40 -21 55 -40 62 -24 9 -263 11 -329 3z m251 -208 c-30 -23 -193 -45 -209 -29 -3 4 3 18 13 32 11 13 20 39 20 57 0 17 2 34 5 36 2 3 46 -15 96 -39 82 -39 91 -46 75 -57z m-213 69 c-34 -15 -44 -34 -18 -34 25 0 17 -39 -10 -52 -34 -15 -57 5 -53 46 3 35 35 56 83 55 l30 -1 -32 -14z m287 -116 c32 -43 38 -120 13 -167 -27 -52 -66 -76 -121 -75 -73 1 -114 27 -180 112 -33 43 -69 85 -81 96 -11 10 -18 22 -15 27 2 4 64 6 137 3 117 -4 136 -3 172 15 52 25 48 26 75 -11z"
            />
          </svg>
          <span class="ml-1 text-2xl font-bold leading-10 uppercase text-danger"
            >Sanktelisabeth</span
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
            class="flex px-4 my-4 text-sm font-medium uppercase text-text-secondary"
            >Projects</span
          >
        </li>
        <SidebarDropdownMenuLi name="Tables">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 2v3H5V5h15Zm-5 14h-5v-9h5v9ZM5 10h3v9H5v-9Zm12 9v-9h3v9h-3Z"
            />
          </svg>
          <template #submenus>
            <SidebarDropdownItemLi name="PCs" link="/tables/pcs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H14v-3H4V7Zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1Zm-1 9h-4v-7h4v7Z"
                ></path>
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="Hosts" link="/tables/hosts">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2Zm0-3h2v2H4v-2ZM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2Zm4 1H4V5h2v2Zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2Zm0-3h2v2H4v-2Z"
                />
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="VMs" link="/tables/vms">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3Z"
                />
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="Netzwerke" link="/tables/networks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    d="M13,22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3V22z M10,7V4h4v3H10z M9,17v3H5v-3H9z M19,17v3h-4v-3H19z"
                  />
                </g>
              </svg>
            </SidebarDropdownItemLi>
            <SidebarDropdownItemLi name="Häuser" link="/tables/houses">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <SidebarDropdownItemLi name="Räume" link="/tables/rooms">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2Zm-6 0H7V5h6v14Zm-3-8h2v2h-2Z"
                />
              </svg>
            </SidebarDropdownItemLi>
          </template>
        </SidebarDropdownMenuLi>
        <SidebarSingleLi name="Reports" link="/reports">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
          >
            <g>
              <path
                d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5 -1.45-1.1-3.55-1.5-5.5-1.5 -1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94C4.46 20.11 5.5 20 6.5 20c1.56 0 3.22.26 4.56.92 .6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85 -1.28-.57-2.82-.79-4.27-.79ZM21 17.23c0 .63-.58 1.09-1.2.98 -.75-.14-1.53-.2-2.3-.2 -1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 .92 0 1.83.09 2.7.28 .46.1.8.51.8.98v9.47Z"
              />
              <path
                d="M13.98 11.01c-.32 0-.61-.2-.71-.52 -.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45 .41.05.71.42.66.83 -.05.41-.42.71-.83.66 -1.62-.19-3.39-.04-4.73.39 -.08.01-.16.03-.23.03Z"
              />
              <path
                d="M13.98 13.67c-.32 0-.61-.2-.71-.52 -.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45 .41.05.71.42.66.83 -.05.41-.42.71-.83.66 -1.62-.19-3.39-.04-4.73.39 -.08.02-.16.03-.23.03Z"
              />
              <path
                d="M13.98 16.33c-.32 0-.61-.2-.71-.52 -.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45 .41.05.71.42.66.83 -.05.41-.42.7-.83.66 -1.62-.19-3.39-.04-4.73.39 -.08.02-.16.03-.23.03Z"
              />
            </g>
          </svg>
        </SidebarSingleLi>
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
        <SidebarSingleLi
          external="true"
          name="Tickets"
          link="http://ticket.sanktelisabeth.local/mantis/my_view_page.php"
        >
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
            class="flex px-4 my-4 text-sm font-medium uppercase text-text-secondary"
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
        <SidebarSingleLi name="Logout" color="text-danger" link="/logout">
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

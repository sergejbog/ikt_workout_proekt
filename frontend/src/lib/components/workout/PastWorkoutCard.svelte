<script lang="ts">
  export let date, title, phase, text, progress, assignees;
</script>

<div class="bg-white rounded">
  <div class="p-6">
    <!-- action start -->
    <div class="flex items-center">
      <div class="grow">
        <p class="text-gray-400 text-sm font-medium">{date}</p>
      </div>

      <div class="shrink text-end">
        <div class="hs-dropdown relative inline-flex">
          <button id="hs-dropdown-custom" type="button" class="hs-dropdown-toggle text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-600 feather feather-more-horizontal icon icon-xs">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>

          <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 p-2 mt-2 hidden bg-white shadow rounded py-2 px-1.5 min-w-[10rem]" aria-labelledby="hs-dropdown-custom">
            <a class="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded" href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 feather feather-edit icon-xxs icon me-2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Share</span>
            </a>
            <a class="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded" href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 feather feather-refresh-cw icon-xxs icon me-2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              <span>Refresh</span>
            </a>

            <hr class="my-2" />

            <a class="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded" href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 feather feather-trash-2 icon-xxs icon me-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              <span>Deactivate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- action end -->

    <div class="mt-3">
      <h4 class="mt-0 mb-1">
        <a class="text-lg text-gray-600 hover:text-primary" href="">{title}</a>
      </h4>
      <span class={phase === "Designing" ? "inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-primary/10 text-primary" : phase === "Planning" ? "inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-orange-500/10 text-orange-500" : "inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-sky-500/10 text-sky-500"}>{phase}</span>

      <p class="text-gray-400 text-sm my-4">{text}</p>
    </div>

    <!-- progress -->
    <div class="mt-4">
      <div class="flex mb-3">
        <div class="grow">
          <h6 class="mt-0">Progress</h6>
        </div>
        <div class="shrink text-end">
          <small class="fw-semibold">{progress}%</small>
        </div>
      </div>
      <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
        <div class={progress >= 70 ? "flex flex-col justify-center overflow-hidden bg-green-500" : progress <= 50 ? "flex flex-col justify-center overflow-hidden bg-red-500" : "flex flex-col justify-center overflow-hidden bg-amber-500"} role="progressbar" style="width:{progress}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <!-- progress end -->

    <!-- assignment start -->
    <div class="flex -space-x-2 mt-3">
      {#each assignees as assignee, idx (idx)}
        <img class="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src={assignee.image} alt="" />
      {/each}
    </div>
    <!-- assignment end -->
  </div>
</div>

<script>
    import bellIcon from "$lib/assets/workout-history/bell-icon.png"
</script>
<div class="container w-full h-full pl-4 pr-4 pt-5">
    
    <!-- Header -->
    <div class="">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h3 class="text-lg text-[#ADA4A5] ">Welcome Back,</h3>
                <h2 class="text-2xl font-bold ">Stefani Wong</h2>
            </div>
            <div class="relative">
                <div class="shadow-lg p-2 border-2 rounded-lg">
                    <img src="{bellIcon}" alt="bell-icon" class="w-full h-full">
                </div>
                <!-- Red dot -->
                <div class="absolute top-[-4px] right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
        </div>
    </div>

    <!-- Workout Progress-->
    <div class="mt-8">
        <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg">Workout Progress</h3>
            <button class="px-2 py-2 rounded-full text-white bg-gradient-to-r from-blue-400 to-blue-500 text-sm">Weekly <span>⌄</span></button>
        </div>

        <div class="">
            Chart HERE
        </div>
    </div>

    <!-- Latest Workouts -->

    <div class="mt-8">
        <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg">Latest Workouts</h3>
            <a href="#" class="text-[#ADA4A5] text-xs">See more</a>
        </div>

        <!-- Latest Workouts List -->
        <div class="flex-col space-y-4">
            <!-- Workout NOT FINISHED-->
            <div class="mt-4 flex justify-evenly px-2 py-4 items-center gap-2 shadow-lg border rounded-lg ">
                <div class="w-20 h-20 rounded-full overflow-hidden ">
                    <img class="w-full h-full object-cover" src="https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=rj7LgjUuXde0eLWikS1rvDnsKDdBotgsy9eM5HDzko0=" alt="">
                </div>
    
                <div class="">
                    <div class="flex flex-col">
                        <h4 class="text-[#aaa8a8]">FullBody Workout</h4>
                        <span class="text-[#A4A9AD]">180 Calories Burn | 20minutes</span>
                    </div>
                    
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
                    </div>
                </div>
    
                <div class="border w-8 h-8 rounded-full border-black">
                </div>
            </div>
            <!-- Workout FINISHED -->
            <div class=" flex justify-evenly px-2 py-4 items-center gap-2 shadow-lg border rounded-lg">
                <div class="w-20 h-20 rounded-full overflow-hidden ">
                    <img class="w-full h-full object-cover" src="https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=rj7LgjUuXde0eLWikS1rvDnsKDdBotgsy9eM5HDzko0=" alt="">
                </div>
    
                <div class="flex-col space-y-4">
                    <div class="flex flex-col">
                        <h4 class="font-bold">FullBody Workout</h4>
                        <span  class="text-[#A4A9AD]">180 Calories Burn | 20minutes</span>
                    </div>
                    
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
                        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 100%"></div>
                    </div>
                </div>
    
                <div class="border w-8 h-8 rounded-full border-black bg-green-600">

                </div>
            </div>
            
        </div>
        

    </div>


</div>
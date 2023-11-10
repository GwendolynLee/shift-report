<template>
    <div class="input-form">
        <form action="">
            <div class="flex space-x-4">
                <div class="w-1/2">
                  <label for="location">Location:</label>
                   <input class="border border-gray-400 p-1 block w-full rounded" type="text" id="location" v-model="locationInput">
            </div>
            <br>
                <div class="w-1/2">
                  <label for="overseer">Overseer:</label>
                  <input class="border border-gray-400 p-1 block w-full rounded" type="text" id="overseer" v-model="overseerInput">               
                  </div>
            </div>
           <br>
            <div class="flex space-x-4">
           <div class="w-1/2">
                <label for="date">Date:</label>
              <input class="border border-gray-400 p-1 block w-full rounded" type="text" id="date" v-model="dateInput">
           </div>
            <br>
            <div class="w-1/2">
                <label for="shift">Shift:</label>
             <input class="border border-gray-400 p-1 block w-full rounded" type="text" id="shift" v-model="shiftInput">
            </div>

            </div>


            <br>
            <label for="notes">Notes:</label>
            <textarea maxlength="300" class="border border-gray-400 p-2 block w-full rounded" type="text" id="notes" v-model="notesInput"></textarea>
            <br>
            <div class="flex justify-end mb-4">
            <button v-on:click.prevent="submitData" class="border-blue-400 border-2 text-blue-400 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:bg-blue-400 hover:text-white transition ease-out duration-500">
                Submit
            </button>
            </div>


        </form>
    </div>
</template>

<script>
export default {
    emits: ['add-report'],
    data() {
        return {
            locationInput: '',
            overseerInput: '',
            dateInput: '',
            shiftInput: '',
            notesInput: ''
        };
    },
    methods: {
        submitData() {
            this.$emit(
                'add-report', 
                this.locationInput,
                this.overseerInput,
                this.dateInput,
                this.shiftInput,
                this.notesInput
                );
        },
    },
}
</script>
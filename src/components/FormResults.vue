<template>

<div class="form-results bg-white my-5 p-5 rounded shadow-md">
    <ul>
        <li><span class="font-semibold">Location:</span>  {{ locationName }}</li>
        <li><span class="font-semibold">Overseer: </span> {{ overseerName }}</li>
        <li><span class="font-semibold">Date: </span> {{ dateOfShift }}</li>
        <li><span class="font-semibold"> Shift: </span> {{ shiftTime }}</li>
        <li><span class="font-semibold"> Notes: </span>  {{ notesTaken }}</li>
    </ul>
    <div class="flex justify-end mb-4">
        <button @click="$emit('delete', id)" class="border-red-400 border-2 text-red-400 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:bg-red-400 hover:text-white transition ease-out duration-500">
            Delete</button>
    </div>

</div>

</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        locationName: {
            type: String,
            required: true,
        },
        overseerName: {
            type: String,
            required: true,
        },
        dateOfShift: {
            type: String,
            required: true,
        },
        shiftTime: {
            type: String,
            required: true,
        },
        notesTaken: {
            type: String,
            required: true,
        },
    },
    emits: ['delete'],
    methods: {
        deleteReport() {
            this.$emit('delete');
        }
    },
}
</script>
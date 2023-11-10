<template>
    <section class="px-5 my-20 max-w-3xl mx-auto">
        <h1 class="text-3xl font-semibold py-4">Shift Report</h1>
        <h2 class="text-2xl py-4 border-t-4">Input Form</h2>
             <input-form @add-report="addReport"></input-form>
        <ul>
        <h2 class="text-2xl py-4 border-t-4">Form Results</h2>
            <form-result
                v-for="report in reports"
                :key="report.id"
                :id="report.id"
                :location-name="report.location"
                :overseer-name="report.overseer"
                :date-of-shift="report.date"
                :shift-time="report.shift"
                :notes-taken="report.notes"
                @delete="deleteReport"
            ></form-result>

        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            reports: [
                {
                    id: "first",
                    location: "Building A",
                    overseer: "Bob Smith",
                    date: "11/01/2023",
                    shift: "8:00am - 12:00pm",
                    notes: "Everything went well, nothing to report."
                },
                                {
                    id: "second",
                    location: "Building B",
                    overseer: "John Doe",
                    date: "11/02/2023",
                    shift: "12:00pm - 4:00pm",
                    notes: "Ran out of inventory during last hour of shift."
                },
            ],
        };
    },
    methods: {
        addReport(location, overseer, date, shift, notes) {
            const newReport = {
                id: new Date().toISOString(),
                location: location,
                overseer: overseer,
                date: date,
                shift: shift,
                notes: notes
            };
            this.reports.push(newReport);
        },
        deleteReport(reportId) {
            this.reports = this.reports.filter(report => report.id !== reportId);
        }
    },
}
</script>

<style>

</style>

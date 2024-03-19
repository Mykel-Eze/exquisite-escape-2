<template>
    <section id="sort-flights">
        <div class="sort-bar">
            <div class="container flex-div">
                <span class="text-[18px]">Sort By</span>
                <ul class="flex-div sort-tabs-wrapper">
                    <li class="active">
                        <span>All Flights</span>
                    </li>
                    <li>
                        <span>Cheapest</span>
                    </li>
                    <li>
                        <span>Fastest</span>
                    </li>
                    <li>
                        <span>Recommended</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="tickets-overview-wrapper my-[30px]">
                <FlightTicketOverviewBlock />
                <FlightTicketOverviewBlock />
            </div>

            <div class="other-tickets-header my-[20px] text-[24px] text-[#141414]">Other tickets vailable </div>

            <div class="tickets-overview-wrapper my-[30px]">
                <FlightTicketOverviewBlock />
                <FlightTicketOverviewBlock />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SortFlights"
}
</script>

<style>

</style>
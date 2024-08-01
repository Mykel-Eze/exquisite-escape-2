<template>
  <div id="flights-page" class="pt-[60px] pb-[40px]">
    <div class="row">
        <div class="container">
            <div class="dashboard-page-header">
                <Breadcrumb :items="[
                    { path: '/dashboard/account', text: 'Account' },
                    { path: '/dashboard/flights', text: 'Flights' },
                ]" />
                <h2 class="dashboard-page-title">Flights</h2>
                <p class="dashboard-page-title-desc">
                    Find a breakdown of flight history here
                </p>

                <div class="search-now-btn-wrapper mt-[26px]">
                    <button class="search-now-btn flex-div gap-2">
                        <span>Search now</span>
                        <img src="~/assets/images/search-icon-white.svg" alt="search-icon" class="search-icon">
                    </button>
                </div>
            </div>

            <!-- <div class="search-flight-wrapper my-[30px]">
                <div></div>
            </div> -->

            <div class="flights-content-wrapper">
                <DashboardFlights />
            </div>

            <div id="flight-history" class="history-wrapper mt-60">
                <h2 class="dashboard-page-title">Recent Flights</h2>
                <p class="dashboard-page-title-desc">
                    Find a breakdown of flight history here
                </p>

                <div class="history-table-wrapper">
                    <HistoryTable 
                        :data="flightsData"
                        :headers="['Booking Code', 'Status', 'Departure Date', 'Departure Time', 'Arrival Date', 'Arrival Time', 'Departure Airport', 'Arrival Airport', 'Booking Date']"
                        :statusOptions="['All', 'Upcoming', 'Past', 'Cancelled', 'Suspended']"
                        uniqueKey="bookingCode"
                    />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { FlightsHistoryData } from '~/data/FlightsHistoryData.js'

export default {
    name: "DashboardFlights",
    data() {
        return {
            flightsData: FlightsHistoryData
        }
    }
}
</script>

<style>

</style>
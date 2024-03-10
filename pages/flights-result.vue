<template>
  <div id="flight-result-page">
    <div class="top-section black-bg">
        <div class="row">
            <div class="container py-5">
                <div class="search-tab-wrapper">
                    <FlightTab />
                </div>
            </div>
        </div>
    </div>

    <section class="results-section">
        <div class="row">
            <div class="container">
                <div class="result-main-wrapper">
                    <div class="result-filter-side">
                        <FlightsFilter />
                    </div>
                    <div class="result-contents-side">
                        <img src="@/assets/images/Results.png" alt="Results" class="results full-w">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <div class=""></div> -->
  </div>
</template>

<script>
export default {
    name: "FlightsResultPage"
}
</script>

<style>

</style>
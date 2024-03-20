<template>
  <div class="ticket-overview-block">
    <div class="left-sdie">
        <div class="ticket-labels-wrapper flex-div gap-[18px]">
           <TicketLabels label="cheapest" />
           <TicketLabels label="one-way-per-traveller" />
           <TicketLabels label="days-after" />
        </div>

        <div class="ticket-overview-content">
            <div class="tc-row-wrapper">
                <div class="toc-row flex-div gap-5 w-full">
                    <div class="ticket-airline">
                        <img src="/icons/qatar.svg" alt="qatar">
                        <span>Qatar Airways</span>
                    </div>

                    <div class="ticket-from-to flex-div">
                        <div class="ticket-from">
                            <div class="ticket-time">23:10</div>
                            <div class="ticket-state-code">LOS</div>
                            <div class="ticket-state">Lagos</div>
                        </div>
                        <div class="from-to-divider">
                            <SvgIcons icon="flight_2" />
                            <div>
                                <span>17h 55m</span> ∙ <span>2 Stop ADD DUB</span>
                            </div>
                        </div>
                        <div class="ticket-to">
                            <div class="ticket-time">17:05</div>
                            <div class="ticket-state-code">LHR</div>
                            <div class="ticket-state">London</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ticket-labels-wrapper flex-div gap-[10px]">
           <TicketLabels label="carry-one-bag" />
           <TicketLabels label="no-changes-fee" />
        </div>
    </div>
    <div class="right-sdie rel min-h-[200px]">
        <div class="ticket-amount-wrapper">
            <div class="ticket-amount">₦3,664,000</div>
            <div class="view-ticket-btn-wrapper w-full">
                <button class="view-ticket-btn flex-div">
                    <span>View 90 ticket(s)</span>
                    <img src="@/assets/images/chevy-right.svg" alt="right arrow">
                </button>
            </div>
        </div>
        <div class="cup-curves up-curve"></div>
        <div class="cup-curves down-curve"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TicketOverviewBlock"
}
</script>

<style>

</style>
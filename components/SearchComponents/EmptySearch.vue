<template>
    <div class="empty-search-container">
        <img src="@/assets/images/search.svg" alt="search">
        <div class="text-[#141414] text-[24px]">
            Sorry, we couldn't find any flights that match your criteria
        </div>
        <div class="text-[16px]">
            Try searching nearby airports or alternative dates
        </div>
    </div>
</template>

<script>
export default {
    name: "EmptySearch"
}
</script>

<style scoped>
.empty-search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 356px;
    text-align: center;
    margin: auto;
    position: relative;
    top: 10%;
}
</style>
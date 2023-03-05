<template>
    <div class="entry-container mb-3 pointer p2">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15 </span>
            <span class="mx-1 fs-5">Julio </span>
            <span class="mx-2 fw-light">2021</span>
        </div>

        <div class="entry-description">
            Amet nisi mollit proident magna. In labore nulla consequat dolore reprehenderit. Aute incididunt proident tempor pariatur enim dolore minim elit ex excepteur. Culpa pariatur magna veniam duis sit dolor. Quis ipsum eiusmod nostrud nisi ipsum laborum quis consectetur. Elit deserunt adipisicing dolor dolore adipisicing dolor ullamco velit anim ipsum.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    
    .entry-description{
        font-size: 12px;   
    }
}


</style>
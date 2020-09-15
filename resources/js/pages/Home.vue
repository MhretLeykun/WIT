<template>
    <div>
        <Navbar :app="this" class="mb-2" />
        <h1>Home</h1>
    </div>
</template>
<script>
import Navbar from "../components/Navbar";
export default {
    components: {
        Navbar
    }
};
</script>

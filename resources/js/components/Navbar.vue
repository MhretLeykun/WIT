<template>
    <nav
        class="navbar justify-content-between navbar-expand-lg navbar-light bg-light mb-3"
    >
        <a class="navbar-brand" href="#">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {{ app.user ? app.user.name : "Account" }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div v-if="!app.user">
                            <router-link to="/login" class="dropdown-item">
                                Login
                            </router-link>
                            <router-link to="/register" class="dropdown-item">
                                Register
                            </router-link>
                        </div>
                        <a
                            v-else
                            @click="logout"
                            href="javascript:;"
                            class="dropdown-item"
                            >Logout</a
                        >
                    </div>
                </li>
            </ul>
            <!-- <ul class="navbar-nav ml-auto"></ul> -->
        </div>
    </nav>
</template>
<script>
export default {
    name: "Navbar",
    props: ["app"],
    data() {
        return {};
    },
    methods: {
        logout() {
            this.app.req.post("auth/logout").then(() => {
                this.app.user = null;
                this.$router.push("/login");
            });
        }
    }
};
</script>
<style scoped></style>

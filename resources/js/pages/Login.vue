<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body col-md-6 offset-md-3">
                <form v-on:submit.prevent="onSubmit">
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">
                                {{ error }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group">
                        <label for="">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Username..."
                            v-model="username"
                        />
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password..."
                            v-model="password"
                        />
                    </div>
                    <button class="btn btn-primary">login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    props: ["app"],
    data() {
        return {
            username: "",
            password: "",
            errors: []
        };
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (!this.username) {
                this.errors.push("Username is required!");
            }
            if (!this.password) {
                this.errors.push("Password is required!");
            }
            if (!this.errors.length) {
                const data = {
                    username: this.username,
                    password: this.password
                };
                this.app.req
                    .post("/auth/login", data)
                    .then(response => {
                        this.app.user = response.data;
                        this.$router.push("/");
                    })
                    .catch(error => {
                        this.errors.push(error.response.data.error);
                    });
            }
        }
    }
};
</script>
<style scoped></style>

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
                        <label for="">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Name..."
                            v-model="name"
                        />
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
                            placeholder="Password Again..."
                            v-model="password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password Again..."
                            v-model="passwordAgain"
                        />
                    </div>
                    <button class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "register",
    props: ["app"],
    data() {
        return {
            name: "",
            username: "",
            password: "",
            passwordAgain: "",
            errors: []
        };
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (!this.name) {
                this.errors.push("Name is required!");
            }
            if (!this.username) {
                this.errors.push("Username is required!");
            }
            if (!this.password) {
                this.errors.push("Password is required!");
            }
            if (!this.passwordAgain) {
                this.errors.push("Confirmation password is required!");
            }
            if (this.password != this.passwordAgain) {
                this.errors.push("Passwords do not match!");
            }
            if (!this.errors.length) {
                const data = {
                    name: this.name,
                    username: this.username,
                    password: this.password
                };
                this.app.req
                    .post("/auth/register", data)
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

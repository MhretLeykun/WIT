<template>
    <div class="">
        <div class="session">
            <div class="left"></div>
            <form
                v-on:submit.prevent="onSubmit"
                class="log-in"
                autocomplete="off"
            >
                <h4>Lamour</h4>
                <p>
                    let's ask you a little bit about your self!
                </p>
                <div class="floating-label">
                    <input
                        placeholder="Bio"
                        type="text"
                        name="name"
                        id="bio"
                        autocomplete="off"
                        v-model="bio"
                    />
                    <label for="bio">Bio</label>
                </div>
                <div class="floating-label">
                    <input
                        placeholder="Tag 1"
                        type="text"
                        name="tag_1"
                        id="tag_1"
                        autocomplete="off"
                        v-model="tag_1"
                    />
                    <label for="email">Tag 1</label>
                </div>
                <div class="floating-label">
                    <input
                        placeholder="Tag 2"
                        type="text"
                        name="tag_2"
                        id="tag_2"
                        autocomplete="off"
                        v-model="tag_2"
                    />
                    <label for="email">Tag </label>
                </div>

                <div class="floating-label">
                    <input
                        placeholder="Tag 3"
                        type="text"
                        name="tag_3"
                        id="tag_3"
                        autocomplete="off"
                        v-model="tag_3"
                    />
                    <label for="email">Tag 3</label>
                </div>

                <button>Next</button>
                <div v-if="errors" class="mt-2">
                    <div
                        class="alert alert-danger alert-dismissible my-2"
                        v-for="(error, index) in errors"
                        :key="index"
                    >
                        {{ error }}
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",
    props: ["app"],
    data() {
        return {
            bio: "",
            tag_1: "",
            tag_2: "",
            tag_3: "",
            errors: []
        };
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (!this.bio) {
                this.errors.push("Bio is required!");
            }
            if (!this.tag_1) {
                this.errors.push("Tag is required!");
            }
            if (!this.tag_2) {
                this.errors.push("Tag is required!");
            }
            if (!this.tag_3) {
                this.errors.push("Tag is required!");
            }
            if (!this.errors.length) {
                const data = {
                    bio: this.bio,
                    tag_1: this.tag_1,
                    tag_2: this.tag_2,
                    tag_3: this.tag_3
                };
                this.app.req
                    .post("/profile/create", data)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        this.errors.push(error.response.data.error);
                    });
            }
        }
    }
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap");
* {
    font-family: "Baloo Tamma 2", cursive;
    font-weight: 300;
    margin: 0;
}
$primary: #003249;
html,
body {
    height: 100vh;
    width: 100%;
    margin: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: #f3f2f2;
}
h4 {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    opacity: 0.85;
}
.container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}
label {
    font-size: 12.5px;
    color: #000;
    opacity: 0.8;
    font-weight: 400;
}
form {
    padding: 40px 30px;
    background: #fefefe;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
    width: 500px;
    h4 {
        margin-bottom: 20px;
        color: rgba(#000, 0.5);
        span {
            color: rgba(#000, 1);
            font-weight: 700;
        }
    }
    p {
        line-height: 155%;
        margin-bottom: 5px;
        font-size: 14px;
        color: #000;
        opacity: 0.65;
        font-weight: 400;
        max-width: 200px;
        margin-bottom: 40px;
    }
}
a.discrete {
    color: rgba(#000, 0.4);
    font-size: 14px;
    border-bottom: solid 1px rgba(#000, 0);
    padding-bottom: 4px;
    margin-left: auto;
    font-weight: 300;
    transition: all 0.3s ease;
    margin-top: 40px;
    &:hover {
        border-bottom: solid 1px rgba(#000, 0.2);
    }
}
button {
    -webkit-appearance: none;
    width: auto;
    min-width: 100px;
    border-radius: 30px;
    text-align: center;
    padding: 10px 40px;
    margin-top: 5px;
    background-color: saturate($primary, 30%);
    color: #fff;
    font-size: 14px;
    margin-left: auto;
    font-weight: 500;
    // box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
    border: none;
    transition: all 0.3s ease;
    outline: 0;
    &:hover {
        cursor: pointer;
        // transform: translateY(-3px);
        // box-shadow: 0 2px 6px -1px rgba($primary, 0.65);
        &:active {
            transform: scale(0.99);
        }
    }
}
input {
    font-size: 16px;
    padding: 20px 20px;
    height: 50px;
    border: none;
    border: solid 1px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.3s linear;
    color: #000;
    font-weight: 400;
    -webkit-appearance: none;
    &:focus {
        outline: 0;
        border: solid 1px rgba(0, 0, 0, 0.7);
        box-shadow: 0 2px 6px -8px rgba($primary, 0.45);
    }
}
.floating-label {
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    label {
        position: absolute;
        top: calc(50% - 7px);
        left: 0;
        opacity: 0;
        transition: all 0.3s ease;
        padding-left: 44px;
        margin-left: 15px;
    }
    input {
        width: calc(100% - 44px);
        margin-left: auto;
        display: flex;
    }
    .icon {
        position: absolute;
        top: 0;
        left: 0;
        height: 56px;
        width: 44px;
        display: flex;
        svg {
            height: 30px;
            width: 30px;
            margin: auto;
            opacity: 0.15;
            transition: all 0.3s ease;
            path {
                transition: all 0.3s ease;
            }
        }
    }
    input:not(:placeholder-shown) {
        padding: 28px 0px 12px 0px;
    }
    input:not(:placeholder-shown) + label {
        transform: translateY(-10px);
        opacity: 0.7;
    }
    input:valid:not(:placeholder-shown) + label + .icon {
        svg {
            opacity: 1;
            path {
                fill: $primary;
            }
        }
    }
    input:not(:valid):not(:focus) + label + .icon {
        animation-name: shake-shake;
        animation-duration: 0.3s;
    }
}
$displacement: 3px;
@keyframes shake-shake {
    0% {
        transform: translateX(-$displacement);
    }
    20% {
        transform: translateX($displacement);
    }
    40% {
        transform: translateX(-$displacement);
    }
    60% {
        transform: translateX($displacement);
    }
    80% {
        transform: translateX(-$displacement);
    }
    100% {
        transform: translateX(0px);
    }
}
.session {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: auto auto;
    background: #ffffff;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.12);
    width: 700px;
}
.left {
    width: 220px;
    height: auto;
    min-height: 100%;
    position: relative;
    background-image: url("https://images.pexels.com/photos/3744162/pexels-photo-3744162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    background-size: cover;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    svg {
        height: 40px;
        width: auto;
        margin: 20px;
    }
}

.logo {
    font-family: 1.2rem;
    color: white;
}
</style>

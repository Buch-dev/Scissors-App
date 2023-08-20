<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center w-[80%] md:w-[462px] my-[132px]">
      <p>Sign up with:</p>
      <div class="flex my-4">
        <button
          class="btn flex items-center mr-6 rounded-[3px]"
          @click="handleGoogleLogin"
        >
          <img src="@/assets/img/google.png" alt="google" class="mr-1" />
          <span>Google</span>
        </button>
        <button class="btn flex items-center rounded-[3px]">
          <img src="@/assets/img/apple.png" alt="apple" class="mr-1" />
          <span>Apple</span>
        </button>
      </div>
      <div class="flex items-center">
        <img src="@/assets/img/horizontal-line.png" alt="horizontal line" class="hidden md:block" />
        <span class="mx-5">Or</span>
        <img src="@/assets/img/horizontal-line.png" alt="horizontal line" class="hidden md:block" />
      </div>
      <transition
        enter-active-class="duration-500 ease-out"
        leave-active-class="duration-500 ease-in"
      >
        <form action="" @submit.prevent class="grid grid-cols-1 w-full">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            class="w-full px-4 py-3 mt-8 text-base text-primaryBlue placeholder:text-[#A0B1C0] rounded-xl border-2 border-primaryBlue focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="w-full px-4 py-3 my-8 text-base text-primaryBlue placeholder:text-[#A0B1C0] rounded-xl border-2 border-primaryBlue focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
          <div class="relative">
            <input
              v-model="password"
              :type="passwordVisible ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="Password"
              class="w-full px-4 py-3 text-base text-primaryBlue placeholder:text-[#A0B1C0] rounded-xl border-2 border-primaryBlue focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
            />
            <img
              src="@/assets/img/eye.png"
              alt="eye"
              class="absolute right-4 top-5 cursor-pointer"
              @click="togglePasswordVisibility"
            />
          </div>
          <div class="relative mt-8">
            <input
              v-model="confirmPassword"
              :type="passwordVisible ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="Retype Password"
              class="w-full px-4 py-3 text-base text-primaryBlue placeholder:text-[#A0B1C0] rounded-xl border-2 border-primaryBlue focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
            />
            <img
              src="@/assets/img/eye.png"
              alt="eye"
              class="absolute right-4 top-5 cursor-pointer"
              @click="togglePasswordVisibility"
            />
          </div>
          <p class="text-xs mt-3 mb-[34px] text-[#A0B1C0]">
            6 or more characters, one number, one uppercase & one lower case.
          </p>
          <button @click="handleSignup" class="btn text-sm flex items-center justify-center">
            Sign up with Email
          </button>
          <p class="text-[#5C6F7F] text-sm text-center mt-6 mb-[21px]">
            Don't have an account?
            <NuxtLink to="/input/login" class="text-[#4991FF]">Log in</NuxtLink>
          </p>
        </form>
      </transition>
      <p class="text-xs text-[#A0B1C0] text-center">
        By signing up to, you agree to <br />
        Scissor's <b>Terms of Service, Privacy Policy</b> and
        <b>Acceptable Use Policy.</b>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
definePageMeta({
  layout: "input",
});

export default defineComponent({
  setup() {
    const password = ref("");
    const confirmPassword = ref("");
    const passwordVisible = ref(false);
    const form = reactive({
      email: "",
      password: "",
    });

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    const supabaseAuth = useSupabaseAuthClient();

    const handleGoogleLogin = () => {
      supabaseAuth.auth.signInWithOAuth({
        provider: "google",
      });
    };

    const errors = ref<string>("");

    const handleSignup = async () => {
      try {
        const { data, error } = await supabaseAuth.auth.signUp({
          email: form.email,
          password: form.password,
        });

        if (error) {
          errors.value = error.message;
          return;
        }
        console.log({ data });
      } catch (err) {
        errors.value = "Something went wrong";
      }
    };

    return {
      password,
      confirmPassword,
      passwordVisible,
      togglePasswordVisibility,
      handleGoogleLogin,
      handleSignup,
    };
  },
});
</script>

<style scoped></style>

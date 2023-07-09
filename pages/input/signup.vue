<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center w-[462px] my-[132px]">
      <p>Sign up with:</p>
      <div class="flex gap-6 my-4">
        <button
          class="btn flex items-center gap-1 rounded-[3px]"
          @click="handleGoogleLogin"
        >
          <img src="@/assets/img/google.png" alt="google" />
          <span>Google</span>
        </button>
        <button class="btn flex items-center gap-1 rounded-[3px]">
          <img src="@/assets/img/apple.png" alt="apple" />
          <span>Apple</span>
        </button>
      </div>
      <div class="flex items-center">
        <img src="@/assets/img/horizontal-line.png" alt="horizontal line" />
        <span class="mx-5">Or</span>
        <img src="@/assets/img/horizontal-line.png" alt="horizontal line" />
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
          <button class="btn text-sm flex items-center justify-center">
            Sign up with Email
          </button>
          <p class="text-[#5C6F7F] text-sm text-center mt-6 mb-[21px]">
            Don't have an account?
            <NuxtLink to="#" class="text-[#4991FF]">Sign up</NuxtLink>
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

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    const supabaseAuth = useSupabaseAuthClient();

    const handleGoogleLogin = () => {
      supabaseAuth.auth.signInWithOAuth({
        provider: "google",
      });
    };

    return {
      password,
      confirmPassword,
      passwordVisible,
      togglePasswordVisibility,
      handleGoogleLogin,
    };
  },
});
</script>

<style scoped></style>

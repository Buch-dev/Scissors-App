<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center w-[462px] my-[132px]">
      <p>Log in with:</p>
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
        <form
          action=""
          @submit.prevent
          @submit="handleLoginForm"
          class="grid grid-cols-1 w-full"
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Email address or username"
            class="w-full px-4 py-3 my-8 text-base text-primaryBlue placeholder:text-[#A0B1C0] rounded-xl border-2 border-primaryBlue focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
          <div class="relative">
            <input
              v-model="form.password"
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
          <p class="text-sm my-4 text-end text-[#4991FF]">
            Forgot your password?
          </p>
          <button class="btn text-sm flex items-center justify-center">
            Log in
          </button>
          <div class="text-red-500 mt-5 italic">{{ errors }}</div>
          <p class="text-[#5C6F7F] text-sm text-center my-4">
            Don't have an account?
            <NuxtLink to="#" class="text-[#4991FF]">Sign up</NuxtLink>
          </p>
        </form>
      </transition>
      <p class="text-xs text-[#A0B1C0] text-center">
        By signing in with an account, you agree <br />
        to Scissor's <b>Terms of Service, Privacy Policy</b> and
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

    const handleLoginForm = async () => {
      console.log("Form is getting submitted");

      if (!form.email || !form.password) {
        errors.value = "Please fill all the fields";
        return;
      }

      try {
        const { data, error } = await supabaseAuth.auth.signInWithPassword({
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
      form,
      passwordVisible,
      togglePasswordVisibility,
      handleGoogleLogin,
      handleLoginForm,
      errors,
    };
  },
});
</script>

<style scoped></style>

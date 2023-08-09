<template>
  <div
    class="flex h-[600px] border mt-[112px] bg-[#1E3448] items-center justify-center custom-bg-images md:h-[523px]"
  >
    <div class="url-form w-4/5 bg-white pt-11 px-11 pb-14 rounded-xl md:w-auto">
      <transition
        enter-active-class="duration-500 ease-out"
        leave-active-class="duration-500 ease-in"
      >
        <form
          action=""
          @submit.prevent="handleLinkForm"
          class="grid grid-cols-1 gap-6"
        >
          <input
            type="text"
            name="url"
            id="url"
            v-model="form.long_url"
            placeholder="Place URL here..."
            class="w-full px-4 py-3 text-[12px] text-primaryBlue placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
          <div class="flex flex-col gap-4 items-center relative md:flex-row md:justify-between">
            <select
              name=""
              id=""
              placeholder="Choose Domain"
              class="text-primaryBlue text-sm placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out bg-white px-4 py-3 appearance-none leading-5 focus:ring-0 focus:ring-primaryBlue w-full md:w-[202px]"
            >
              <option disabled selected value="" class="text-primaryBlue">
                Choose Domain
              </option>
              <option value="1" class="text-primaryBlue">Option 1</option>
              <option value="2" class="text-primaryBlue">Option 2</option>
              <option value="3" class="text-primaryBlue">Option 3</option>
            </select>
            <input
              type="text"
              name="alias"
              id="alias"
              v-model="form.key"
              placeholder="Type Alias here"
              class="text-primaryBlue text-sm placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out bg-white px-4 py-3 appearance-none leading-5 focus:ring-0 focus:ring-primaryBlue w-full md:w-[178px]"
            />
            <img
              src="../assets/img/dropdown-blue.svg"
              alt=""
              class="absolute top-5 left-[170px] md:left-[170px]"
            />
          </div>
          <input
            type="text"
            name="url"
            id="url"
            v-model="form.long_url"
            placeholder="Place URL here..."
            class="w-full px-4 py-3 text-[12px] text-primaryBlue placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
          <button type="submit" class="btn text-sm flex items-center justify-center">
            Trim URL <img src="../assets/img/magic-wand.svg" alt="magic" />
          </button>
        </form>
      </transition>
      <p class="mt-[22px] text-sm text-primaryBlue">
        By clicking TrimURL, I agree to the
        <b>
          Terms of Service, <br />
          Privacy Policy
        </b>
        and Use of Cookies.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { nanoid } from "nanoid";
import { Database } from "../types/supabase";
import { userInfo } from "os";

export default defineComponent({
  setup() {
    const form = reactive({
      long_url: "",
      key: "",
    });

    const client = useSupabaseClient<Database>();
    const user = useSupabaseUser()

    const handleLinkForm = async () => {
      try {
        const { data, error } = await client.from("links").insert({
          long_url: form.long_url,
          key: form.key,
          user_id: user.value?.id
        });

        if (error) {
          alert(error.message);
          return;
        }

        if (data) {
          createShortKey();
          form.long_url = "";
          alert("Link created successfully");
        }
      } catch (e) {
        console.log(e);
      }
    };

    const createShortKey = (len: number = 6): void => {
      form.key = nanoid(len);
    };

    onMounted(() => {
      createShortKey();
    });

    return { form, handleLinkForm };
  },
});
</script>

<style scoped>
.custom-bg-images {
  background-image: url("../assets/img/shortener-left.svg"),
    url("../assets/img/shortener-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, right bottom;
}
</style>

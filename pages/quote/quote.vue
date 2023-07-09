<template>
  <div class="">
    <h2 class="text-4xl font-bold mt-[132px] text-center">
      Let's get in touch
    </h2>
    <transition
        enter-active-class="duration-500 ease-out"
        leave-active-class="duration-500 ease-in"
      >
    <form
      action=""
      class="mt-[23.39px] text-base w-[570px] mx-auto bg-[#CBD6E0] px-[30px] pb-[60.36px] rounded-md text-[#112232] mb-[100.64px]"
    >
      <div class="flex flex-col gap-[13.81px]">
        <div
          class="name mt-[106.61px] flex justify-between items-center gap-4"
        >
          <div class="firstname">
            <label for="firstname" class="">First Name*</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="mt-[6.19px] w-full h-[46px] rounded-xl px-[9px] text-sm focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
            />
          </div>
          <div class="lastname">
            <label for="lastname" class="">Last Name*</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="mt-[6.19px] w-full h-[46px] rounded-xl px-[9px] text-sm focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
        <div class="companyname flex flex-col">
          <label for="companyname">Company Name*</label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            class="mt-[5.98px] h-[46px] rounded-xl px-[9px] text-sm focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
        </div>
        <div class="business_email_address flex flex-col">
          <label for="business_email">Business Email Address*</label>
          <input
            type="email"
            name="business_email"
            id="business_email"
            class="mt-[5.98px] h-[46px] rounded-xl px-[9px] text-sm focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
        </div>
        <div class="flex flex-col">
          <label for="phone_number">Phone Number*</label>
          <input
            type="tel"
            name="phone_number"
            id="phone_number"
            class="mt-[5.98px] h-[46px] rounded-xl px-[9px] text-sm focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
        </div>
        <div class="job_title flex flex-col relative">
          <label for="job_title">Job Title*</label>
          <select
            name="job_title"
            id="job_title"
            placeholder="Please select"
            class="mt-[5.98px] h-[46px] rounded-xl appearance-none bg-white px-[9px] text-sm text-[#5C6F7F] focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          >
            <option value="" disabled selected class="">Please Select</option>
            <option value="option_1">Option 1</option>
            <option value="option_2">Option 2</option>
            <option value="option_3">Option 3</option>
          </select>
          <img
            src="@/assets/img/dropdown-black.svg"
            alt="dropdown icon"
            class="absolute right-6 bottom-4"
          />
        </div>
        <div class="job_title flex flex-col relative">
          <label for="job_title">Company SIze*</label>
          <select
            name="job_title"
            id="job_title"
            placeholder="Please select"
            class="mt-[5.98px] h-[46px] rounded-xl appearance-none bg-white px-[9px] text-sm text-[#5C6F7F] focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          >
            <option value="" disabled selected class="">Please Select</option>
            <option value="option_1">Option 1</option>
            <option value="option_2">Option 2</option>
            <option value="option_3">Option 3</option>
          </select>
          <img
            src="@/assets/img/dropdown-black.svg"
            alt="dropdown icon"
            class="absolute right-6 bottom-4"
          />
        </div>
        <div class="job_title flex flex-col relative">
          <label for="job_title">Primary Use Case*</label>
          <select
            name="job_title"
            id="job_title"
            placeholder="Please select"
            class="mt-[5.98px] h-[46px] rounded-xl appearance-none bg-white px-[9px] text-sm text-[#5C6F7F] focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          >
            <option value="" disabled selected class="">Please Select</option>
            <option value="option_1">Option 1</option>
            <option value="option_2">Option 2</option>
            <option value="option_3">Option 3</option>
          </select>
          <img
            src="@/assets/img/dropdown-black.svg"
            alt="dropdown icon"
            class="absolute right-6 bottom-4"
          />
        </div>
        <div class="job_title flex flex-col relative">
          <label for="job_title">Country*</label>
          <select
            name="job_title"
            id="job_title"
            placeholder="Please select"
            class="mt-[5.98px] h-[46px] rounded-xl appearance-none bg-white px-[9px] text-sm text-[#5C6F7F] focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          >
            <option value="" disabled selected class="">Please Select</option>
            <option value="option_1">Option 1</option>
            <option value="option_2">Option 2</option>
            <option value="option_3">Option 3</option>
          </select>
          <img
            src="@/assets/img/dropdown-black.svg"
            alt="dropdown icon"
            class="absolute right-6 bottom-4"
          />
        </div>
      </div>
      <p class="text-xs text-[#5C6F7F] mt-[9.23px]">
        Scissor requires the contact information you provide in order to reach
        out to you regarding our products and services. You have the option to
        unsubscribe from these communications whenever you wish. To learn more
        about how to unsubscribe, our privacy practices, and our dedication to
        safeguarding your privacy, please refer to our Privacy Policy.
      </p>
      <button class="btn w-full mt-6">Submit</button>
    </form>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
definePageMeta({
  layout: 'quote'
})

export default defineComponent({
  
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

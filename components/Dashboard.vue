<template>
    <div class="min-h-screen bg-gray-100 py-10">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-6">Short Links Dashboard</h1>
        <ul class="space-y-4">
          <li v-for="link in links" :key="link.id" class="bg-white rounded-md shadow p-4 flex items-center justify-between">
            <p class="text-blue-600">https://chat.openai.com/c/358ca4d6-330f-44da-af14-796b501cc418</p>
            <button @click="copyLink(link.short_url)" class="px-3 py-1 bg-blue-600 text-white rounded">Copy</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  // ... your imports and script logic
  
  </script>
  
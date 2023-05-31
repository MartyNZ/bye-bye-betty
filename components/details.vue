<template>
  <section class="details">
    <div class="flex flex-col">
      <div class="">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4 text-lg" colspan="2">
                    Vehicle Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">Body</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    3 Door Hard Top convertible
                  </td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Engine
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    4.0L inline 6 cylinders
                  </td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Fuel Type
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Petrol</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Transmission
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">5 Speed Manual</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Peak Power
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">130kW at 4600rpm</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Peak Torque
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">296Nm at 3500rpm</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Odometer
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">194,3xx km's</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Ownership
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">2 owners</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap px-6 py-4 font-semibold text-lg">
                    Asking price:
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 font-semibold text-lg">
                    $14,990
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.details {
  max-width: calc(100% - 1rem);
  margin-inline: auto;
}
</style>

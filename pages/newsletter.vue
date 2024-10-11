<template>
  <div class="container mx-auto">
    <!-- Seção de Assinatura -->
    <section class="place-content-center min-h-96">
      <div class="grid grid-rows gap-4 place-content-center min-h-full">
        <div class="mt-6 text-center max-w-5xl p-4">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Aumente sua produtividade: Dicas para desenvolvedores eficientes
          </h1>
          <!-- <p class="mt-6 text-xl text-gray-500">
            Assine para receber conteúdos exclusivos na sua caixa de entrada gratuitamente!
          </p> -->
        </div>
        <div class="flex flex-col justify-center p-4" style="">
          <div class="flex flex-col items-center">
            <div
              class="flex w-full flex-col sm:flex-row overflow-hidden rounded-lg sm:t-center"
              style="
                background-color: rgb(249, 250, 251);
                border: 2px solid rgb(0, 0, 0);
                max-width: 600px;
              "
            >
              <div class="flex w-full items-center" style="background-color: rgb(249, 250, 251)">
                <input
                  autocomplete="email"
                  required
                  class="wt-button-font p-5 z-10 w-full border-none bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg text-center"
                  placeholder="Coloque seu e-mail"
                  type="email"
                  name="email"
                  style="font-family: Roboto; color: rgb(17, 24, 39); min-height: 50px"
                />
              </div>
              <input
                class="cursor-pointer px-5 py-5 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg rounded-none sm:rounded-lg-r"
                type="submit"
                value="Assinar"
                style="
                  background-color: rgb(0, 0, 0);
                  color: rgb(255, 255, 255);
                  font-family: Roboto;
                  min-height: 50px;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

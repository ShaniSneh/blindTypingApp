<template>
    <div class="exercise">

        <div class="exp">

            Copy the following quote, without looking at the keyboard!, to the best of you ability.

        </div>

        <div>

            <span class="original" v-model="org"></span>

        </div>

        <div>

            <v-text-field class="copy" type="text" v-model="copied" v-on:input="compareText"/>

        </div>
        <div>
            <p v-if="mistake" class="alert alert-danger" role="alert">Oops... Seems like you mistyped. Donnot be discouraged, I know you can do it!</p>
            <p v-if="good" class="alert alert-success" role="alert">You are on fire! you passed this excercise with only {{ errors }} mistakes!</p>
        </div>
        <div class="under">
            <v-btn @click="next" dark>Next</v-btn>
            <v-btn @click="back" dark>Menu</v-btn>
        </div>
    </div>

</template>

<script>
  export default {
      name: 'Exercise',
      props: {
          level: ['level'],
          org: String,
          copied: String,
          mistake: false,
          good: false
      },
      methods: {
          compareText() {
              let len = this.copied.length
              var tocomp = this.currQuote.substr(0, len)
    
              if (this.copied == tocomp) {
                  this.mistake = false
                  this.org = '<mark>' + tocomp + '</mark>' + this.currQuote.substr(len)
              } else {
                  if (this.level == 3) {
                      this.copied = ''
                  } 
                  else {
                      this.org = '<mark id="error">' + tocomp + '</mark>' + this.currQuote.substr(len)
                  }
                  this.mistake = true
                  this.errors++
              }
    
              if (len == this.currQuote.length) {
                  this.good = true
                  document.getElementsByTagName("mark").className = "success"
              }
          },  
          next() {
              this.$emit('next')
          },
          back() {
              this.$emit('back')
          }
      },  
      watch: {
          copied() {
              this.compareText()
          }
      }
  } 
</script>

<style scoped>
    mark #error {
        background-color: lightcoral;
    }

    mark {
        background-color: darkkhaki;
    }

    mark .success {
        background-color: lightgreen;
    }

</style>

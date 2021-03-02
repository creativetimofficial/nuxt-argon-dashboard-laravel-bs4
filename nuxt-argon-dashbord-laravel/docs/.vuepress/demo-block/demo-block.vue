<template>
  <div
    class="demo-block ct-example"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="source-code">
        <button class="btn-clipboard btn btn-sm btn-primary" @click="doCopy">Copy</button>
        <div class="raw-code">
          <slot name="highlight" ref="test"></slot>
        </div>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass]"></i>
      </transition>
      <transition name="text-slide">
        <span class="showText" v-show="true">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null
      };
    },

    props: {
      source: {
        type: String
      }
    },

    methods: {

      scrollHandler() {
        // const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
        // this.fixedControl = bottom > document.documentElement.clientHeight &&
        //   top + 44 <= document.documentElement.clientHeight;
        // this.$refs.control.style.left = this.fixedControl ? `${ left }px` : '0';
      },

      removeScrollHandler() {
        this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
      },
      doCopy () {
        let html = this.$el.querySelector('.raw-code code').innerText;
        this.$copyText(html).then((e) => {
          this.$notify({
            type: 'success',
            message: 'Copied to clipboard'
          })
          console.log(e)
        }, (e) => {
          alert('Can not copy')
          console.log(e)
        })
      }
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1];
      },

      blockClass() {
        return `demo-${ this.lang } demo-${ this.$router.currentRoute.path.split('/').pop() }`;
      },

      iconClass() {
        return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
      },

      controlText() {
        return this.isExpanded ? 'Hide' : 'Show Code';
      },

      codeArea() {
        return this.$el.getElementsByClassName('meta')[0];
      },

      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return this.$el.getElementsByClassName('description')[0].clientHeight +
            this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      }
    },

    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
        if (!val) {
          this.fixedControl = false;
          this.$refs.control.style.left = '0';
          this.removeScrollHandler();
          return;
        }
        setTimeout(() => {
          this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap');
          this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler);
          this.scrollHandler();
        }, 200);
      }
    },

    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    },

    beforeDestroy() {
      this.removeScrollHandler();
    }
  };
</script>
<style lang="scss">
  .demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;

    .btn-clipboard {
      position: absolute;
      z-index: 2;
      right: 40px;
      top: -5px;
    }

    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .demo-button {
      float: right;
    }

    .source {
      padding: 24px;
    }

    .source-code {
      position: relative;
    }
    .meta {
      background-color: #fafafa;
      border-top: solid 1px #eaeefb;
      height: 0;
      transition: height .2s;
      overflow: scroll;
    }


    .highlight {
      margin-top: 0;
      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;

        &::before {
          content: none;
        }
      }
    }

    .demo-block-control {
      border-top: solid 1px #eaeefb;
      height: 44px;
      box-sizing: border-box;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &.is-fixed {
        position: fixed;
        bottom: 0;
        width: 868px;
      }

      i {
        font-size: 16px;
        line-height: 44px;
        transition: .3s;
        margin-left: 30px;
      }

      > span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
        display: inline-block;
      }

      &:hover {
        color: #5e72e4;
      }

      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }

      .control-button {
        line-height: 26px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 25px;
      }
    }
  }
</style>

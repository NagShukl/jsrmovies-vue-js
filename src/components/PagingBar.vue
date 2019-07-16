<template>
<div class="pagingBar">
            <div @click="getFirstPage" class="pageBtn previousBtn" title="First Page" data-test="FirstPageBtn">
                &#9664;</div>
                <!-- className={currentPage === 1 ? 'noDisplay' : 'pageBtn previousBtn'} -->
            <div @click="getPreviousPage" :class="['previousButton', getPreviousPageCls()]"
                title="Previous Page" data-test="PreviousPageBtn">&#9665;</div>
            <div class="pageData">Page {{currentPage()}} of {{totalResults}} Results.</div>
            <div @click="getLastPage" class="pageBtn nextBtn" title="Last Page" data-test="LastPageBtn">&#9654;</div>
            <!-- className={currentPage * 10 >= props.totalResults ? 'noDisplay' : 'pageBtn nextBtn'} -->
            <div @click="getNextPage" :class="['nextButton', getNextPageCls()]"
                title="Next Page" data-test="NextPageBtn">&#9655;</div>

        </div>
</template>

<script>
export default {
  name: 'PagingBar',
  props: {
    totalResults: {
        type: Number,
        required: true
   }
},
methods: {
    currentPage() {
        return this.$store.state.currentPage;
    },
    numOfPages () {
      if (this.totalResults > 0 && this.totalResults % 10 === 0) {
        return this.totalResults / 10;
      } else {
        return Math.floor(this.totalResults / 10) + 1;
      }
    },
    getFirstPage() {
        this.getPage(1);
    },
    getPreviousPage() {
        if(this.currentPage() >= 1)
            this.getPage(this.currentPage() - 1);
    },
    getNextPage() {
        this.getPage(this.currentPage() + 1);
    },
    getLastPage() {
        this.getPage(this.numOfPages());
    },
    getPage(page) {
        const searchedValue = this.$store.state.searchedValue
      this.$store.dispatch('fetchResults', { searchedValue, page })
    },
    getPreviousPageCls() {
        return this.currentPage() === 1 ? "noDisplay" : "";
    },
    getNextPageCls() {
        return this.currentPage() * 10 >= this.$store.state.totalResults ?  "noDisplay" : "";
    }
}
}
</script>

<style scoped lang="scss">
 .pagingBar {
                    position: inherit;
                    bottom: 0;
                    width: 100%;
                    opacity: 1;
                    z-index: 150;
                    background-color: white;
                    text-align: center;
                    height: 30px;
                    .pageData {
                        text-align: center;
                        padding-right: 19%;
                        font-weight: bold;                   
                    }
                    .pageText {
                        margin-top: 7px;
                    }
                    .previousButton {
                        float: left;
                        margin-left: 0px;
                        font-size: xx-large;
                        margin-top: -2px;
                        &:hover {
                            cursor: pointer;
                            color: blue;
                        }
                    }
                    .nextButton {
                            font-size: xx-large;
                            margin-top: -21px;
                            float: right;
                            &:hover {
                            cursor: pointer;
                            color: blue;
                        }
                    }
                    .pageBtn {
                        font-size: xx-large;
                        display: inline;
                        margin-left: 8px;
                        &:hover {
                            cursor: pointer;
                            color: blue;
                        }
                    }
                   .previousBtn {
                    float: left;
                        margin-top: -1px;
                        margin-left: -8px;
                   }
                   .nextBtn {
                    float: right;
                    margin-top: -18px;
                   }
                }
.noDisplay {
    display: none;
}
</style>
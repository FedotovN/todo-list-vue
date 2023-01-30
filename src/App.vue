<template>
<main>
  <div class="wrapper">
    <div class="header">
      <div class="pages">
        <h2>Todo</h2>
        <ul>
          <li><RouterLink to="/">Todo-List</RouterLink></li>
          <li><RouterLink to="/categories">Categories</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="content">
        <RouterView></RouterView>
    </div>
  </div>
</main>
</template>
<script>
export default{
  name: "App",
  created(){
    this.$store.dispatch('categories/loadCategories')
    this.$store.dispatch('task/loadTasks')
  }
}
</script>
<style lang="scss">
  
  *{
    padding: 0;
    margin: 0;
  }
  body{
    min-height: 100vh;
    background-color: $accent-color;
    font-family: $font-family;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $default-color;
  }
  main{
      border-radius: 8px;
      width: 400px;
      background-color: white;
      display: flex;
      justify-content: center;
    .wrapper{
      padding: 20px 0;
      width: calc(100% - 40px);
      gap: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      .header{
        width: calc(100% - 20px);
      }
      .pages{
        height: 70px;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 100%;
        ul{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
            font-size: 15px;
            height: 100%;
          }
        }
        h2{
            flex: 1;
        }
      }
      .content{
        width: 100%;
      }
    }
  }
@media (max-width: 400px) {
    main{
      width: 300px;
    .wrapper{
      padding: 20px 0;
      width: calc(100% - 40px);
      gap: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      .header{
        width: calc(100% - 40px);
      }
      .pages{
        height: 70px;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        ul{
          width: 100%;
          display: flex;
          gap: 10px;
          align-items: center;
          li{
            font-size: 14px;
            height: 100%;
          }
        }
        h2{
            flex: 1;
            font-size: 18px;
        }
      }
      .content{
        width: 100%;
        h4{
          font-size: 14px;
        }
      }
    }
  }
}
</style>

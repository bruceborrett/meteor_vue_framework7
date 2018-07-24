<template>
  <f7App :params="f7params">
    <f7-statusbar></f7-statusbar>
    <f7-panel left cover>
      <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
    </f7-panel>
    <f7-panel right reveal>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>

<script>
  import f7App from 'framework7-vue/components/app.js';
  import f7Panel from 'framework7-vue/components/panel.js';
  import f7View from 'framework7-vue/components/view.js';
  import f7Statusbar from 'framework7-vue/components/statusbar.js';

  import routes from './routes';

  // Demo Theme
  let theme = 'auto';
  if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
  }

  export default {
    components: {
      f7App,
      f7Panel,
      f7View,
      f7Statusbar,
    },
    data() {
      return {
        f7params: {
          id: 'io.framework7.testapp',
          routes,
          theme
        }
      }
    }
  };
</script>

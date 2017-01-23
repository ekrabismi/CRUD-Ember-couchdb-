// BEGIN-SNIPPET routes.posts.edit
import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    return ajax(`/api/posts/${params.slug}`);
  }
});
// END-SNIPPET

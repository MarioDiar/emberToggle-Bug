import Ember from 'ember';

export default Ember.Controller.extend({
	isOpenToggle: false,

	actions: {
		openToggle(){
			this.set('isOpenToggle', true);
		}
	}
});

import Ember from 'ember';

export default Ember.Component.extend({
	editing: false,
	value: ' ',
	actions: {
		startEditing: function(){
			this.set('editing', true);
		},
		stopEditing: function(value){
			//this.get('task').save()
			this.sendAction('doSave');
			this.set('editing', false);

		},
		cancelEditing: function(value){
			this.sendAction('cancel');
			this.set('editing', false);
		}

	}
});

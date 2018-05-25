import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		let org = this.modelFor('org');
		return $.get(
			`https://api.github.com/repos/${org.id}/${params.repoid}`
		).then((rawRepo) => {
			// backing up github's numeric ID
			rawRepo.oldId = rawRepo.id;
			// use the name of the repo as our ID
			rawRepo.id = rawRepo.name;
			return rawRepo;
		});
	}
});

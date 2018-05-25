import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return $.get(`https://api.github.com/orgs/${params.id}`).then((rawOrg) => {
			// backing up github's numeric ID
			rawOrg.oldId = rawOrg.id;
			// use the name of the repo as our ID
			rawOrg.id = rawOrg.name;
			return rawOrg;
		});
	}
});

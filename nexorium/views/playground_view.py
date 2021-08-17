
from pyramid.view import view_config

from nexorium.resources.playground import Fields

from nexus.db import NotFound


# Views
# ======================================================================================================

@view_config(route_name='playground', renderer='nexorium:templates/main.jinja2')
def playground_get(request):
    return dict()


@view_config(route_name='playground_actions', match_param='action=load', renderer='json', permission='public')
def playground_load(request):

    # Chargement des données du playground
    # ---

    fields_id = 'playground_fields'
    try:
        fields = request.db.load(fields_id)
    except NotFound:
        fields = Fields()
        fields.doc_id = fields_id
        fields.store()

    return dict(
        playground_raw = fields.to_raw(request=request),
    )


@view_config(route_name='playground_actions', match_param='action=save', renderer='json', permission='public')
def playground_save(request):

    # Enregistrement des données du playground
    # ---

    playground_raw = json.loads(request.params['playground_raw'])
    playground_id = playground_raw['_id']
    playground_rev = playground_raw['_rev']

    playground = request.db.load(playground_id)
    playground.update_from_raw(playground_raw, request=request)
    playground.store()

    return dict(
        playground_raw = playground.to_raw(request=request),
    )

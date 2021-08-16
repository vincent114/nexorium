from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='playground', renderer='nexorium:templates/main.jinja2')
def playground_get(request):
    return dict()


@view_config(route_name='playground_actions', match_param='action=load', renderer='json', permission='public')
def playground_load(request):

    # Chargement des données du playground
    # ---

    # TODO

    return dict(
        playground_raw = {},
    )

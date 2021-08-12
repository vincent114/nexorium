from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='playground', renderer='nexorium:templates/main.jinja2')
def playground_get(request):
    return dict()

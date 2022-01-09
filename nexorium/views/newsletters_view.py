from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='newsletters', renderer='nexorium:templates/main.jinja2')
def newsletters_get(request):
    return dict()

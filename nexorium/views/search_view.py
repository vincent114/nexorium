from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='search', renderer='nexorium:templates/main.jinja2')
def search_get(request):
    return dict()

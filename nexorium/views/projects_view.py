from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='projects', renderer='nexorium:templates/main.jinja2')
def projects_get(request):
    return dict()

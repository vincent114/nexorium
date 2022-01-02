from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='docs', renderer='nexorium:templates/main.jinja2')
def docs_get(request):
    return dict()

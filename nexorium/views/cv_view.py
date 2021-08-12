from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='cv', renderer='nexorium:templates/main.jinja2')
def cv_get(request):
    return dict()

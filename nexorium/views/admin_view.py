from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='admin', renderer='nexorium:templates/main.jinja2')
def admin_get(request):
    return dict()

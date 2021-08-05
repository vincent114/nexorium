
from nexorium.libs import acl
# from cerberus.resources.user import User

from nexus.db import db_main
from nexus.db import NxRegistry


# ======================================================================================================

nexorium_registry = NxRegistry()
# nexorium_registry.add(User, db=db_main)


# Objects
# ======================================================================================================

# ---
# Root
# ---

class Root:

    __name__ = ''
    __parent__ = None

    __acl__ = acl.ACL

    def __init__(self, request):
        if request.matchdict:
            self.__dict__.update(request.matchdict)

        self.request = request
        self.db = db_main
        request.db = self.db

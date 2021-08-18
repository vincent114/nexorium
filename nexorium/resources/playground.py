
from pydantic import BaseModel, Field
from typing import List, Optional

from nexus import db
from nexus.db.objects.autocomplete import Autocomplete

import datetime


# NxDB Objects
# ======================================================================================================

# ----
# Fields
# ----

class Fields(db.NxDoc):

    value_text: str = ''
    value_number: int = 0

    value_date: datetime.date = None
    value_time: datetime.time = None

    value_select: str = ''
    value_textarea: str = ''

    value_autocomplete_1: Autocomplete = None
    value_autocomplete_2: Autocomplete = None

    value_switcher: str = ''

    value_radio: str = ''
    value_checkbox: bool = False

    value_html: str = ''

    # Update
    # -

    def update_from_raw(self, raw, request=None):

        # Mise à jour des données à partir du RAW
        # ---

        self.value_text = raw['value_text']
        self.value_number = raw['value_number']

        value_date_iso = raw['value_date']
        if value_date_iso:
            self.value_date = datetime.datetime.strptime(value_date_iso, '%Y-%m-%d').date()
        else:
            self.value_date = None

        value_time_iso = raw['value_time']
        if value_time_iso:
            self.value_time = datetime.datetime.strptime(value_time_iso[:5], "%H:%M").time()
        else:
            self.value_time = None

        self.value_autocomplete_1.update_from_raw(raw['value_autocomplete_1'], request=request)
        self.value_autocomplete_2.update_from_raw(raw['value_autocomplete_2'], request=request)

        self.value_switcher = raw['value_switcher']

        self.value_radio = raw['value_radio']
        self.value_checkbox = raw['value_checkbox']

        self.value_html = raw['value_html']

    # Serializations
    # -

    def to_raw(self, request=None):

        # RAW datas for UI
        # ---

        if not self.value_autocomplete_1:
            self.value_autocomplete_1 = Autocomplete()

        if not self.value_autocomplete_2:
            self.value_autocomplete_2 = Autocomplete()

        return dict(
            doc_id = self.doc_id,
            doc_rev = self.doc_rev,
            doc_state = self.doc_state,

            value_text = self.value_text,
            value_number = self.value_number,

            value_date = self.value_date.isoformat() if self.value_date else '',
            value_time = self.value_time.isoformat() if self.value_time else '',

            value_select = self.value_select,
            value_textarea = self.value_textarea,

            value_autocomplete_1 = self.value_autocomplete_1.to_raw(request=request),
            value_autocomplete_2 = self.value_autocomplete_2.to_raw(request=request),

            value_switcher = self.value_switcher,

            value_radio = self.value_radio,
            value_checkbox = self.value_checkbox,

            value_html = self.value_html,
        )

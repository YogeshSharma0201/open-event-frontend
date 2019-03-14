import Controller from '@ember/controller';
import AdminSalesMixin from 'open-event-frontend/mixins/admin-sales';
import { computed } from '@ember/object';

export default Controller.extend(AdminSalesMixin, {
  columnNames: {
    rowspan: [{
      colname : this.get('l10n').t('Events'),
      class   : '',
      span    : 2
    }, {
      colname : this.get('l10n').t('Discount Code'),
      class   : '',
      span    : 2
    }, {
      colname : this.get('l10n').t('Marketer Email'),
      class   : '',
      span    : 2
    }],
    colspan: [{
      colname : this.get('l10n').t('Completed Orders'),
      class   : 'ui green inverted segment center aligned',
      span    : 2
    }, {
      colname : this.get('l10n').t('Placed Orders'),
      class   : 'ui blue inverted segment center aligned',
      span    : 2
    }, {
      colname : this.get('l10n').t('Pending Orders'),
      class   : 'ui yellow inverted segment center aligned',
      span    : 2
    }]
  },
  subColumnNames: [
    this.get('l10n').t('Tickets'),
    this.get('l10n').t('Sales'),
    this.get('l10n').t('Tickets'),
    this.get('l10n').t('Sales'),
    this.get('l10n').t('Tickets'),
    this.get('l10n').t('Sales')
  ],
  columnValues: [
    {
      propertyName: 'eventName'
    }, {
      propertyName: 'code'
    }, {
      propertyName: 'email'
    }, {
      propertyName : 'sales.completed.sales_total',
      type         : '$',
      class        : 'right aligned'
    }, {
      propertyName : 'sales.placed.ticket_count',
      type         : '',
      class        : 'right aligned'
    }, {
      propertyName : 'sales.placed.sales_total',
      type         : '$',
      class        : 'right aligned'
    }, {
      propertyName : 'sales.pending.ticket_count',
      type         : '',
      class        : 'right aligned'
    }, {
      propertyName : 'sales.pending.sales_total',
      type         : '$',
      class        : 'right aligned'
    }
  ],

  totalRow: computed(function() {
    return [
      {
        value: this.get('totalCompletedTickets')
      },
      {
        value: `US$ ${this.get('totalCompletedSales')}`
      },
      {
        value: this.get('totalPlacedTickets')
      },
      {
        value: `US$ ${this.get('totalPlacedTickets')}`
      },
      {
        value: this.get('totalPlacedTickets')
      },
      {
        value: `US$ ${this.get('totalPlacedTickets')}`
      }
    ];
  }),

  totalSpan: 3
});

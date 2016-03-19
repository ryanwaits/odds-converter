var Fraction = require('fractional-arithmetic').Fraction;
var OddsConverter = OddsConverter || {};

OddsConverter.decimal = {
    toAmerican: function(decimal){
        decimal < 2.0 ? moneyline = ( (-100)/(decimal - 1) ).toPrecision(5) : moneyline = ( (decimal - 1) * 100 ).toPrecision(5);
        return moneyline;
    },
    toFractional: function(decimal){
        fraction = new Fraction((decimal - 1));
        return fraction;
    }
}
OddsConverter.fraction = {
    toAmerican: function(n,d){
        n > d ? moneyline = ((n/d) * 100) : moneyline = (-100)/(n/d);
        return moneyline;
    },
    toDecimal: function(n,d){
        return decimal = (n/d) + 1;
    }
}

OddsConverter.american = {
    toDecimal: function(moneyline){
        moneyline > 0 ? decimal = (moneyline/100) + 1 : decimal = ((100/Math.abs(moneyline)) + 1).toPrecision(3);
        return decimal;
    },
    toFractional: function(moneyline){
        moneyline > 0 ? fraction = new Fraction(moneyline/100) : fraction = new Fraction(100/Math.abs(moneyline));
        return fraction;
    }
}

module.exports = OddsConverter;
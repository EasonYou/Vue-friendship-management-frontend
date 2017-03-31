module.exports = {
	backgroundColor: '#fff',
	title: {
		text: 'Customized Pie',
		left: 'center',
		top: 20,
		textStyle: {
			color: '#000'
		}
	},

	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: '55%',
		center: ['50%', '50%'],
		data: [],
		roseType: 'angle',
		label: {
			normal: {
				textStyle: {
					color: 'rgba(0, 0, 0, 0.4)'
				}
			}
		},
		labelLine: {
			normal: {
				lineStyle: {
					color: 'rgba(0, 0, 0, 0.3)'
				},
				smooth: 0.2,
				length: 10,
				length2: 20
			}
		},
		itemStyle: {
			normal: {
				color: '#20A0FF',
				shadowBlur: 200,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		},
		animationType: 'scale',
		animationEasing: 'elasticOut',
		animationDelay: function(idx) {
			return Math.random() * 200;
		}
	}]
};
import Vue from 'vue'

const List =  {
    props: ['config'],
    data: function(){
		return {
			files: this.config.files
		}
	},
    template: `
        <div class="list-wpr">
            <h1>杂志列表</h1>
            <item-component v-bind:groups="files"></item-component>
        </div>
    `,
    components: {
        'item-component': {
        	props: ['groups'],
        	data: function(){
        		return {
        			thumb: './src/images/thumb/thumb_',
        			jpg: '.jpg'
        		}
        	},
            template: `
            	<div class="list">
                	<div class="item" v-for="group in groups">
                		<h2>{{group.year}}</h2>
                		<ul>
                			<li v-for="item in group.items">
                				<a href="javascript:void(0)">
                					<img v-bind:src="thumb+item.index+jpg">
                				</a>
                			</li>
                		</ul>
                	</div>
                </div>
            `
        }
    }
};

export default List
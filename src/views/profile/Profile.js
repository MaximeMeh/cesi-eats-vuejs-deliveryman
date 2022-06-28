import {
    mapState
} from 'vuex'
import Logo from '../../components/logo/Logo.vue'

export default {
    name: 'Profile',
    components: {
        Logo,
    },
    mounted: function () {
        console.log(this.$store.state.user);
        if (this.$store.state.user.userId == -1) {
            this.$router.push('/');
            return;
        }
        this.$store.dispatch('getUserInfos');
    },
    computed: {
        ...mapState({
            user: 'userInfos',
        })
    },
    methods: {
        logout: function () {
            this.$store.commit('logout');
            this.$router.push('/');
        }
    }
}
